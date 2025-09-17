import { Skeleton } from "@/components/ui/skeleton"


const GroceryCardSkeleton = () => (
  <div className="bg-white rounded-xl w-full h-80 flex flex-col gap-1 shadow-xl">
    <Skeleton className="h-[45%] w-full rounded-t-2xl" />
    <div className="px-2 mt-4 flex flex-col gap-2">
      <Skeleton className="h-5 w-2/3" />
      <Skeleton className="h-4 w-1/3" />
      <div className="flex gap-3 items-center">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-10" />
      </div>
      <Skeleton className="h-6 w-1/2" />
      <Skeleton className="h-10 w-full rounded-md" />
    </div>
  </div>
)

export default GroceryCardSkeleton