import { ReactNode, useEffect } from 'react';

interface ModalProps {
  visible: boolean,
  setVisible: React.Dispatch<React.SetStateAction<boolean>>,
  title: string,
  okDisabled: boolean,
  okClick: any,
  children?: ReactNode
}

function Modal(props: ModalProps) {

  useEffect(() => {
    const close = (e: { key: string; }) => {
      if(e.key === 'Escape'){
        props.setVisible(false)
      }
    };

    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [props]);

  return (
    <>
      {props.visible && 
        <div className='fixed top-0 left-0 w-screen h-screen bg-gray-700/50'
          onClick={() => props.setVisible(false)}>
            <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 w-2/3 h-1/3 translate-x-1/4 translate-y-full flex flex-col justify-between'
              onClick={(e) => e.stopPropagation()}>
              <p className='text-gray-700 text-lg font-bold mb-2'>{props.title}</p>
              {props.children}
              <div className='flex items-center justify-between'>
                <button className='bg-teal-500 hover:bg-teal-700 disabled:hover:bg-teal-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-75' 
                type='button'
                disabled={props.okDisabled}>
                  OK
                </button>
              </div>
            </div>
        </div>
      }
    </>
  );
}

export default Modal;
