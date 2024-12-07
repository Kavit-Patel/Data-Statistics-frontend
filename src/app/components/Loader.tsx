"use client";
const Loader = ({
  width,
  height,
  color,
}: {
  width: number;
  height: number;
  color: string;
}) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div
        className="border-b-2 rounded-full animate-spin"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor: `${color}`,
        }}
      ></div>
    </div>
  );
};

export default Loader;
