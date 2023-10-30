export default function Button({ children, onClick, className, type}) {
    const buttonClass = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded '+(className ? ` ${className}` : '');

    return (<>
        <button 
            onClick={onClick}
            className={buttonClass}
        >
            {children}
        </button>
    </>);
}