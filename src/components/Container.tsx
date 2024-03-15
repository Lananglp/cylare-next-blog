import React, {ReactNode} from 'react'

interface ContainerProps {
    className?: string;
    customSize?: string;
    base?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
    children: ReactNode;
}

function Container(props : ContainerProps) {

    const {className, customSize, base, sm, md, lg, xl, children} = props;

  return (
    <div className='container mx-auto'>
        <div className={`${customSize ? `${base && ''}${sm && ''}${md && ''}${lg && ''}${xl && ''}` : 'mx-4 xl:mx-24'} ${className}`}>
            {children}
        </div>
    </div>
  )
}

export default Container