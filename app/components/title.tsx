const Title = ({ title }: { title: string }) => {
   return (
      <>
         <div className="text-left">
            <h1 className="text-6xl font-semibold">{title}</h1>
         </div>
      </>
   );
};

export default Title;
