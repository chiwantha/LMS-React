/* eslint-disable react/prop-types */
const PageTitleBar = ({ title = "Page Title" }) => {
  return (
    <div
      className="p-2 mb-3 border border-slate-300 dark:bg-slate-600 dark:border-slate-500 dark:text-blue-400
         text-blue-500 flex items-center bg-slate-100 rounded-md"
      aria-label="Page title bar"
    >
      <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">{title}</h1>
    </div>
  );
};

export default PageTitleBar;
