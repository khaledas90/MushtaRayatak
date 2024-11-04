/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

export default function Title({
  mainTitle,
  StyleHr,
  showHr = true,
  sizeHr,
}) {
  return (
    <>
      <div className={`title text-center  py-6`}>
        <h1
          className={`md:text-text-[45px] text-center  font-[title] text-[35px] font-bold lg:text-[50px]`}
        >
          {mainTitle}{" "}
        </h1>
        <div className={`flex justify-center ${StyleHr} `}>
          {showHr && (
            <hr className={`h-[2px] bg-[#efab31] ${sizeHr} text-center`} />
          )}
        </div>

    
      </div>
    </>
  );
}
