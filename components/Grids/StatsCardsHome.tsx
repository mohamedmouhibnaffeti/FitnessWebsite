"use client"

import { motion, useInView } from "framer-motion"
import { useEffect, useState } from "react"

export default function StatsCardsHome() {
    return(
        <div className="w-full grid md:grid-cols-3 h-80">
            <GridElement title="Fitness Awards" text="Lorem ipsum proin gravida nibh vel velit auctor aliquet aenean sollicitudin, lorem auci elit conse quat ipsutissem niuis sed." value={207} action="check them out" bg="bg-blue-950"/>
            <GridElement title="our members" text="Lorem ipsum proin gravida nibh vel velit auctor aliquet aenean sollicitudin, lorem auci elit conse quat ipsutissem niuis sed." value={1540} action="see testimonials" bg="bg-blue-900"/>
            <GridElement title="monthly pushups" text="Lorem ipsum proin gravida nibh vel velit auctor aliquet aenean sollicitudin, lorem auci elit conse quat ipsutissem niuis sed." value={6789} action="Explore" bg="bg-blue-950"/>
        </div>
    )
}

const GridElement = ({
    title,
    text,
    value,
    action,
    bg,
  }: {
    title: string
    text: string
    value: number
    action: string
    bg: string
  }) => {
    const [count, setCount] = useState(0)
  
    useEffect(() => {
      const animation = {
        from: 0,
        to: value,
        duration: 2,
        ease: [0.42, 0, 0.58, 1],
      }
  
      let startTime: number | null = null
  
      const animate = (time: number) => {
        if (!startTime) startTime = time
        const elapsed = (time - startTime) / 1000
        const progress = Math.min(elapsed / animation.duration, 1)
        const current = Math.round(animation.from + progress * (animation.to - animation.from))
  
        setCount(current)
  
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
  
      requestAnimationFrame(animate)
  
      return () => cancelAnimationFrame(requestAnimationFrame(animate))
    }, [value])
  
    return (
      <div className={`w-full p-4 flex flex-col justify-center items-center gap-6 py-12 ${bg}`}>
        <motion.h1
          className="text-8xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {count}
        </motion.h1>
        <h1 className="text-xl uppercase tracking-wider">{title}</h1>
        <p className="max-w-xs text-center font-extralight text-sm">{text}</p>
        <a
          href="#"
          className="text-red-700 hover:text-red-600 font-semibold uppercase active:text-red-700/80 transition-all duration-150 text-sm"
        >
          {action}
        </a>
      </div>
    )
}
  