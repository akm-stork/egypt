import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@radix-ui/react-select';
const LangSwitcher = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Get the user's preferred language or use a default language
    const userLanguage = localStorage.getItem('userLanguage') || 'ar';

    // Set the initial language and direction
    i18n.changeLanguage(userLanguage);
    document.documentElement.dir = userLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = userLanguage;

  }, [i18n]);

  const changeLanguage = (language) => {
    // Update the user's language preference
    localStorage.setItem('userLanguage', language);

    // Change the language and direction
    i18n.changeLanguage(language);
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;

  };

  return (
    <div>
      <Select
        onValueChange={(e) => changeLanguage(e)}
        value={i18n.language}
      >
        <SelectTrigger className='border-none hover:border-none'>
        <SelectValue>{i18n.language === 'en'? <h1 className='bg-primary-multiply-color h-7 w-10 flex justify-center items-center'>EN</h1>:<h1 className='bg-primary-multiply-color h-7 w-10 flex justify-center items-center'>AR</h1>}</SelectValue>
        </SelectTrigger>
        <SelectContent className='bg-primary-color text-white min-w-[fit]'>
        <SelectGroup>
          <SelectItem value="ar" className='h-7 w-10 flex justify-center items-center'>AR</SelectItem>
          <SelectItem value="en" className='h-7 w-10 m-auto flex justify-center items-center'>EN</SelectItem>
        </SelectGroup>
      </SelectContent>
      </Select>
    </div>
  );
};

export default LangSwitcher;

