export default function loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
    
        <div className="h-6 w-32 bg-gray-200 rounded mb-6 animate-pulse"></div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-8">
            
            <div className="aspect-square bg-gray-200 rounded-lg animate-pulse"></div>

            <div className="flex flex-col">
              <div className="h-6 w-24 bg-gray-200 rounded mb-4 animate-pulse"></div>
              <div className="h-8 w-3/4 bg-gray-200 rounded mb-4 animate-pulse"></div>
              <div className="h-6 w-1/2 bg-gray-200 rounded mb-6 animate-pulse"></div>
              <div className="h-8 w-24 bg-gray-200 rounded mb-6 animate-pulse"></div>

              <div className="space-y-2 mb-8">
                <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
              </div>

              <div className="flex gap-4 mt-auto">
                <div className="flex-1 h-12 bg-gray-200 rounded-lg animate-pulse"></div>
                <div className="flex-1 h-12 bg-gray-200 rounded-lg animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}