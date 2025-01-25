export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center min-h-screen w-full">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-emerald-200 border-t-emerald-500 rounded-full animate-spin"></div>
        <p className="text-emerald-500 font-medium text-lg">Memuat...</p>
      </div>
    </div>
  );
} 