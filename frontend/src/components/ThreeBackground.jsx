import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ThreeBackground() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x050505, 0.05)

    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 8

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    // StarField
    const starsGeo = new THREE.BufferGeometry()
    const count = 3000
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i += 3) {
      const r = 25 * Math.cbrt(Math.random())
      const theta = Math.random() * 2 * Math.PI
      const phi = Math.acos(2 * Math.random() - 1)
      pos[i] = r * Math.sin(phi) * Math.cos(theta)
      pos[i + 1] = r * Math.sin(phi) * Math.sin(theta)
      pos[i + 2] = r * Math.cos(phi)
    }
    starsGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    const starsMat = new THREE.PointsMaterial({ color: 0xFF0000, size: 0.03, transparent: true, opacity: 0.6 })
    const starField = new THREE.Points(starsGeo, starsMat)
    starField.rotation.z = Math.PI / 4
    scene.add(starField)

    // Lines
    const linesGeo = new THREE.BufferGeometry()
    const lPoints = []
    for (let i = 0; i < 100; i++) {
      const cx = (Math.random() - 0.5) * 20
      const cy = (Math.random() - 0.5) * 10
      const cz = (Math.random() - 0.5) * 10
      for (let j = 0; j < 3; j++) {
        lPoints.push(cx, cy, cz, cx + (Math.random() - 0.5) * 4, cy + (Math.random() - 0.5) * 4, cz + (Math.random() - 0.5) * 4)
      }
    }
    linesGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(lPoints), 3))
    const lines = new THREE.LineSegments(linesGeo, new THREE.LineBasicMaterial({ color: 0x333333, transparent: true, opacity: 0.2 }))
    scene.add(lines)

    const animate = () => {
      requestAnimationFrame(animate)
      starField.rotation.x -= 0.0005
      starField.rotation.y -= 0.0003
      lines.rotation.y += 0.0005
      renderer.render(scene, camera)
    }
    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize, { passive: true })

    return () => {
      window.removeEventListener('resize', handleResize)
      container.removeChild(renderer.domElement)
      renderer.dispose()
      starsGeo.dispose()
      starsMat.dispose()
      linesGeo.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      id="canvas-container"
      className="fixed inset-0 z-0 bg-brand-black pointer-events-none"
      style={{ transform: 'translateZ(0)' }}
    ></div>
  )
}
