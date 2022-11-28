export default function Req({ title }: { title: string }) {
  return (
    <section>
      <h3 className=" font-bold ">Learn more about this property</h3>
      {/* PHONE, EMAIL & Message */}
      <fieldset className=" w-full rounded-sm border-2 h-14 border-sky-200  px-1 my-5">
        <legend className=" px-1 text-xs font-bold">Phone</legend>
        <input
          className=" text-gray-700 text-sm w-full placeholder:text-gray-500
           placeholder:text-xs outline-none px-5"
          placeholder="Phone"
        />
      </fieldset>
      <fieldset className=" w-full overflow-hidden rounded-sm border-2 h-14 border-sky-200  px-1 my-5">
        <legend className=" px-1 text-xs font-bold">Email</legend>
        <input
          className=" text-gray-700 text-sm w-full placeholder:text-gray-500
           placeholder:text-xs outline-none px-5"
          placeholder="Email"
        />
      </fieldset>
      <fieldset className=" w-full rounded-sm border-2 h-16 border-sky-200  px-1 my-5">
        <legend className=" px-1 text-xs font-bold">Message</legend>
        <textarea
          defaultValue={`I'm interested in ${title}`}
          className=" overflow-hidden text-gray-700 text-sm h-full w-full placeholder:text-gray-500
          resize-none placeholder:text-xs outline-none px-5"
          placeholder="Message"
        ></textarea>
      </fieldset>

      {/* BUTTON */}
      <div
        className=" text-white font-extrabold cursor-pointer
       rounded-md hover:bg-sky-500 h-10 my-5 bg-sky-600 flex justify-center items-center "
      >
        Request info
      </div>
      {/* CHECKBOX */}
      <label>
        <input type="checkbox" />
        <span className=" ml-2 text-xs text-gray-500">
          I want to talk about financing
        </span>

        <p className=" text-zinc-500 text-xs mt-3">
          By pressing Request Info, you agree that us and real estate
          professionals may contact you via phone/text about your inquiry, which
          may involve the use of automated means. You are not required to
          consent as a condition of purchasing any property, goods or services.{" "}
          <span className=" text-sky-500 underline underline-offset-1">
            Message/data
          </span>{" "}
          rates may apply. You also{" "}
          <span className=" text-sky-500 underline underline-offset-1">
            agree to our Terms.
          </span>
        </p>
      </label>
    </section>
  );
}
