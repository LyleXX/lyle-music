import React, { memo, useEffect } from 'react'

const Discover = memo(() => {
  useEffect(() => {
    draggable()
  }, [])

  /***/
  const draggable = () => {
    const dragBox = document.querySelector('.dragBox') as HTMLDivElement
    dragBox.addEventListener('mousedown', function (e) {
      const disX = e.clientX - dragBox.offsetLeft
      const disY = e.clientY - dragBox.offsetTop
      document.onmousemove = function (e) {
        const l = e.clientX - disX
        const t = e.clientY - disY
        dragBox.style.left = l + 'px'
        dragBox.style.top = t + 'px'
      }
      document.onmouseup = function () {
        document.onmousemove = null
        document.onmouseup = null
      }
    })
  }

  return (
    <div className="dragBox absolute left-[100px] top-[100px] h-[400px] w-[500px] bg-red-500">
      Discover
    </div>
  )
})
export default Discover
