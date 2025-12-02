"use client"

import * as React from "react"
import { useState, useRef, useEffect } from "react"

interface MouseFollowingEyesProps {
  size?: "sm" | "md" | "lg"
  className?: string
}

const MouseFollowingEyes: React.FC<MouseFollowingEyesProps> = ({ 
  size = "md",
  className = ""
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const eye1Ref = useRef<HTMLDivElement>(null)
  const eye2Ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const sizeClasses = {
    sm: { eye: "h-8 w-8", pupil: "h-3 w-3", highlight: "w-1 h-1", maxMove: 6, border: "border-2" },
    md: { eye: "h-12 w-12", pupil: "h-4 w-4", highlight: "w-1.5 h-1.5", maxMove: 10, border: "border-2" },
    lg: { eye: "h-24 w-24", pupil: "h-8 w-8", highlight: "w-3 h-3", maxMove: 20, border: "border-4" },
  }

  const currentSize = sizeClasses[size]

  return (
    <div
      ref={containerRef}
      className={`inline-flex items-center gap-1 ${className}`}
    >
      <Eye
        mouseX={mousePos.x}
        mouseY={mousePos.y}
        selfRef={eye1Ref as React.RefObject<HTMLDivElement>}
        otherRef={eye2Ref as React.RefObject<HTMLDivElement>}
        sizeConfig={currentSize}
      />
      <Eye
        mouseX={mousePos.x}
        mouseY={mousePos.y}
        selfRef={eye2Ref as React.RefObject<HTMLDivElement>}
        otherRef={eye1Ref as React.RefObject<HTMLDivElement>}
        sizeConfig={currentSize}
      />
    </div>
  )
}

interface EyeProps {
  mouseX: number
  mouseY: number
  selfRef: React.RefObject<HTMLDivElement>
  otherRef: React.RefObject<HTMLDivElement>
  sizeConfig: {
    eye: string
    pupil: string
    highlight: string
    maxMove: number
    border: string
  }
}

const Eye: React.FC<EyeProps> = ({ mouseX, mouseY, selfRef, otherRef, sizeConfig }) => {
  const pupilRef = useRef<HTMLDivElement>(null)
  const [center, setCenter] = useState({ x: 0, y: 0 })

  const updateCenter = () => {
    if (!selfRef.current) return
    const rect = selfRef.current.getBoundingClientRect()
    setCenter({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    })
  }

  useEffect(() => {
    updateCenter()
    window.addEventListener("resize", updateCenter)
    window.addEventListener("scroll", updateCenter)
    return () => {
      window.removeEventListener("resize", updateCenter)
      window.removeEventListener("scroll", updateCenter)
    }
  }, [])

  useEffect(() => {
    updateCenter()

    const isInside = (ref: React.RefObject<HTMLDivElement>) => {
      const rect = ref.current?.getBoundingClientRect()
      if (!rect) return false
      return (
        mouseX >= rect.left &&
        mouseX <= rect.right &&
        mouseY >= rect.top &&
        mouseY <= rect.bottom
      )
    }

    if (isInside(selfRef) || isInside(otherRef)) return

    const dx = mouseX - center.x
    const dy = mouseY - center.y
    const angle = Math.atan2(dy, dx)

    const pupilX = Math.cos(angle) * sizeConfig.maxMove
    const pupilY = Math.sin(angle) * sizeConfig.maxMove

    if (pupilRef.current) {
      pupilRef.current.style.transform = `translate(${pupilX}px, ${pupilY}px)`
    }
  }, [mouseX, mouseY, center.x, center.y, sizeConfig.maxMove])

  return (
    <div
      ref={selfRef}
      className={`relative bg-white ${sizeConfig.border} border-black dark:border-white rounded-full ${sizeConfig.eye} flex items-center justify-center`}
    >
      <div
        ref={pupilRef}
        className={`absolute bg-black dark:bg-zinc-900 rounded-full ${sizeConfig.pupil} transition-all duration-[5ms]`}
      >
        <div className={`${sizeConfig.highlight} bg-white rounded-full absolute bottom-0.5 right-0.5`}></div>
      </div>
    </div>
  )
}

export { MouseFollowingEyes }

