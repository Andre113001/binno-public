import { Fragment } from 'react';
import logo from '../../../public/logo-sm.png';

const Loader = () => {
  return (
    <Fragment>
        <div className="flex animate-pulse justify-center items-center w-screen h-screen">
            <img src={logo} className='h-[20rem] w-[20rem] flex rounded-full justify-center items-center' alt="binno-logo" />
        </div>
    </Fragment>
  )
}

// 3 hotsilog
// 1 tinapa silog
// 1 extra rice


export default Loader
