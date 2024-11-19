"use client"
import {ScreenBreakpoint} from "@/app/enums/ScreenBreakpoint";

export const useScreen = () => {

  const width = window.innerWidth, height = window.innerHeight;

  const xs = width < ScreenBreakpoint.ExtraSmall,
    sm = width >= ScreenBreakpoint.ExtraSmall && width < ScreenBreakpoint.Small,
    smAndSmaller = width < ScreenBreakpoint.Small,
    md = width >= ScreenBreakpoint.Small && width < ScreenBreakpoint.Medium,
    mdAndSmaller = width < ScreenBreakpoint.Medium,
    lg = width >= ScreenBreakpoint.Medium && width < ScreenBreakpoint.Large,
    lgAndSmaller = width < ScreenBreakpoint.Large,
    xl = width >= ScreenBreakpoint.Large

  return {
      xs, sm, smAndSmaller, md, mdAndSmaller, lg, lgAndSmaller, xl, width, height
  }
}
