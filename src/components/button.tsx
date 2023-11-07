"use client";

export default function Button({ title, children, onClick }) {
  return (
    <>
      <button
        type="button"
        onClick={onClick}
        title={title}
        className="text-white bg-black hover:bg-stone-950 focus:ring-4 focus:outline-none focus:bg-stone-950 font-medium rounded-lg text-sm p-2 text-center inline-flex items-center"
      >
        {children}
        <span className="sr-only">{title}</span>
      </button>
    </>
  );
}
