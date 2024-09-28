const Mail = () => {
    return (
        <div className="flex text-textColor items-center gap-10 fixed rotate-90 bottom-40 -right-48 sm-mx:hidden lg-mx:-right-50">
            <a href="mailto:ashfaqurrashid1@gmail.com" className='font-mono text-lg tracking-widest hover:text-primaryColor hover:-translate-x-2 transition transform'>
                ashfaqurrashid1@gmail.com
            </a>
            <hr className='border-[2px] w-40 rounded-full bg-textColor border-textColor  '/>
        </div>
    );
};

export default Mail;