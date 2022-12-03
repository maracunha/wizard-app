const Paper = ({ children, title, description, content }) => (
  <div className="m-auto max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <h1 className="text-3xl text-blue-600 font-bold">{title}</h1>
    <h2 className="mb-3 font-normal text-gray-500 dark:text-gray-400">
      {description}
    </h2>
      <p>{content}</p>

    {children}
  </div>
);

export default Paper;
