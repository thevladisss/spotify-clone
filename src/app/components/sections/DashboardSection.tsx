"use server"
import React, {HTMLProps, PropsWithChildren, useState} from 'react'


type Props = HTMLProps<any> & PropsWithChildren & {
  title: string;
  href: string
};
function DashboardSection(props: Props): JSX.Element {

  return (
    <section>
      <div className="mb-2" style={{height: "40px"}}>
        <h3 className="text-2xl font-bold text-white mb-2">
          <a className="hover:underline" href={props.href}>
            { props.title }
          </a>
        </h3>
      </div>
      <div>
        {props.children}
      </div>
    </section>
  )
}


export default DashboardSection
