// Page 1 (e.g., InputPage.tsx)
import { useRouter } from 'next/router';

const InputPage = () => {
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputValue = event.target.elements.input.value;
    router.push(`/output?value=${inputValue}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
      className='"block max-w-[550px] w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' 
      placeholder='Search Insta User' type="text"
      name="input" />

      <button type="submit" class="focus:outline-none text-white bg-green-900 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-900 dark:hover:bg-green-700 dark:focus:ring-green-800">
        Search
      </button>
    </form>
  );
};

export default InputPage;
