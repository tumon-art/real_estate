import { MdCopyAll, MdTextsms } from "react-icons/md";
import { FaFacebookMessenger, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { useRouter } from "next/router";

// Twitter Share
function TwitterShareLink({ children }: { children: string }) {
  const router = useRouter();
  const shareText = "Check out this home on";
  const shareUrl = window.location.origin + router.asPath;
  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    shareText
  )}&url=${encodeURIComponent(shareUrl)}`;

  function handleClick() {
    window.open(twitterShareUrl, "_blank");
  }
  return <button onClick={handleClick}>{children}</button>;
}

const Share = () => {
  const router = useRouter();

  const copyUrlToClipboard = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
  };

  return (
    <div>
      <h3 className=" text-2xl font-extrabold"> Share Home </h3>

      {/* Email  */}
      <div>
        <label className=" my-1 block text-sm text-gray-500">Share Home With:</label>
        <input
          className=" my-2 py-1 sm:py-2 placeholder:text-md sm:placeholder:text-xl w-[100%] font-light
           pl-4 ring-2 rounded-md ring-sky-200 text-gray-400"
          placeholder="Recipients Email Address"
        />

        <div className=" my-3 flex gap-4">
          <button className=" hover:bg-sky-600 fonse py-2 px-4 bg-sky-500 shadow-lg rounded-lg text-white">
            Share
          </button>
          <button className=" hover:bg-gray-300 fonse py-2 px-4 border-2 rounded-lg">
            Cancel
          </button>
        </div>
      </div>

      {/* Share Links  */}
      <div className="grid mt-5 gap-y-4">
        <div
          onClick={copyUrlToClipboard}
          className="flex cursor-pointer gap-2 items-center"
        >
          <MdCopyAll className=" text-4xl text-gray-400" />
          <span className=" text-lg font-extrabold "> Copy Link </span>
        </div>

        <div className="flex cursor-pointer gap-2 items-center">
          <MdTextsms className=" text-4xl text-gray-400" />
          <span className=" text-lg font-extrabold "> Send SMS </span>
        </div>

        <div className="flex cursor-pointer gap-2 items-center">
          <FaFacebookMessenger className=" text-4xl text-gray-400" />
          <span className=" text-lg font-extrabold "> Messenger </span>
        </div>

        <div className="flex cursor-pointer gap-2 items-center">
          <FaWhatsapp className=" text-4xl text-gray-400" />
          <span className=" text-lg font-extrabold "> WhatsApp </span>
        </div>

        <div className="flex cursor-pointer gap-2 items-center">
          <FaTwitter className=" text-4xl text-gray-400" />
          <span className=" text-lg font-extrabold ">
            <TwitterShareLink> Tweet </TwitterShareLink>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Share;
