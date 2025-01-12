import { Search } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Input } from './ui/input';
import { useDebounce } from '@/hooks/use-debounce';
import { usePathname, useSearchParams ,useRouter} from 'next/navigation';
import qs from 'query-string';



const SearchBar = () => {
  const [value, setValue] = useState('');// this value is getting updated by the input onChange function, which is then passed to the debounce hook for a debunce value
  const debouncedValue = useDebounce(value); // this hook is created to debounce the value of input and make it slow for 500ms
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter()

  const currentCategoryId = searchParams.get('categoryId'); // this is checking what category is currently selected if any
  

  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: {
          title: debouncedValue, // we are passing the debounced value here , hence the query 
          categoryId:currentCategoryId,
        },
      },
      { skipEmptyString: true, skipNull: true }
    ); //creating a query string url here mainly focused on the title which we are getting from the input 
    router.push(url)
  }, [debouncedValue,pathname,currentCategoryId,router]);

  return (
    <div className="relative">
      <Search className="absolute w-4 h-4 top-3 left-3 text-slate-600" />
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full mid:w-[300px] pl-9 rounded-full bg-slate-100 focus-visible:ring-slate-200"
        placeholder="Search for a course"
      />
    </div>
  );
};

export default SearchBar;
