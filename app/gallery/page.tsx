"use client";

export default function GalleryPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-semibold">Gallery</h1>
      <p>Here are some examples of our past patent illustration work.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {/* Replace with your own images */}
        <div className="bg-gray-100 aspect-video rounded shadow" />
        <div className="bg-gray-100 aspect-video rounded shadow" />
        <div className="bg-gray-100 aspect-video rounded shadow" />
      </div>
    </div>
  );
}
