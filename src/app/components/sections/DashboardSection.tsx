"use server"
import React, {HTMLProps, PropsWithChildren, ReactNode, useState} from 'react'
import style from "@/app/css/DashboardSection.module.css"

type Props = HTMLProps<any> & PropsWithChildren & {
  title: string;
  href: string
  actions?: ReactNode
};
function DashboardSection(props: Props): JSX.Element {

  const classes = `${style.DashboardSection} ${props.className ?? ""}`

  return (
    <section className={classes}>
      <div>
        <div className="flex justify-between">
          <div className="flex flex-col justify-end">
            <h2 className="font-bold text-white relative text-title-small">
              <a className="hover:underline" href={props.href ?? '#'}>
                { props.title }
              </a>
            </h2>
          </div>
          { props.actions ? props.actions : <></> }
        </div>
      </div>
      <div>
        {props.children}
      </div>
    </section>
  )
}


export default DashboardSection
