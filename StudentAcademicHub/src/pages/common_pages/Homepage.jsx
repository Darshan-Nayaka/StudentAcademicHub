export default function Homepage() {
  return (
    <main className="flex flex-col h-screen items-center justify-center bg-gray-100 px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        
        <h1 className="mt-4 text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
          StudentAcademicHub
        </h1>
        
        <p className="mt-6 text-lg font-medium text-gray-600 sm:text-xl">
          Welcome to StudentAcademicHub. Your go-to place for notes, connections, and academic support.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-md bg-indigo-600 px-4 py-2 text-lg font-semibold text-white shadow-md hover:bg-indigo-500 transition-all"
          >
            Share Notes
          </a>
          
          <a href="#" className="text-lg font-semibold text-gray-900 hover:text-indigo-600 transition-all">
            Contact Support <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  );
}
