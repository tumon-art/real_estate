interface ModalProps {
  tailwindClasses?: string;
  children: React.ReactNode;
  isOpen: boolean;
  setModel: (arg1: boolean) => void;
}
export default function Modal({
  tailwindClasses,
  children,
  isOpen,
  setModel,
}: ModalProps) {
  if (!isOpen) return null;
  return (
    <section
      className=" fixed top-0 left-0 flex z-[1999] 
      justify-center items-center h-[100vh] w-[100vw]"
    >
      <div
        onClick={() => setModel(false)}
        className=" absolute left-0 top-0  h-[100vh] 
        w-[100vw] bg-zinc-900 opacity-20 z-[-1] "
      ></div>
      <div
        className={`${tailwindClasses} w-[100%] h-full 
        md:w-[500px] md:h-auto md:scale-90 p-10 bg-white`}
      >
        {children}
      </div>
    </section>
  );
}
