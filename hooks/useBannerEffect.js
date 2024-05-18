import { useEffect, useState } from "react"
import colors from "../Component/colors"

const useBannerEffect = ({dataBanner,scrollViewRef})=>{
    const [currentPage, setCurrentPage] = useState(0);
        useEffect(() => {
        const scrollInterval = setInterval(() => {
            if (currentPage < dataBanner.length - 1) {
                setCurrentPage(currentPage + 1)
            } else {
                setCurrentPage(0)
            }
            const offset = currentPage * colors.screenWidth
            scrollViewRef.current.scrollToOffset({ offset, animated: true })
        }, 2500) // Tự động cuộn sau 2 giây

        return () => {
            clearInterval(scrollInterval)
        }
    }, [currentPage, dataBanner])
}
export default useBannerEffect;