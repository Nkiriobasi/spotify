import styles from './SkeletonLoader.module.css'

type SkeletonLoaderProps = {
    cardLoaderType?: boolean
    oneLinerBigType?: boolean
    oneLinerSmallType?: boolean
    doubleSectionType?: boolean
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ 
    cardLoaderType, 
    oneLinerBigType,
    oneLinerSmallType,
    doubleSectionType
}) => {
  return (
    <>
        {oneLinerBigType && (
            <div className={`${styles.oneLinerBigType_container}`} />
        )}

        {doubleSectionType && (
            <div className={styles.doubleSectionType_container}>
                <div className="absolute left-0 top-0 bottom-0 w-[30%] h-full bg-[#848383] rounded-l-[3px]"></div>
                <div className="rounded-[40px] bg-[#6a6969] w-full h-[22px]"></div>
            </div>
        )}

        {oneLinerSmallType && (
            <div className={`${styles.oneLinerSmallType_container}`} />
        )}

        {cardLoaderType && (
            <div className={styles.cardLoaderType_container}>
                <div className="w-[100%] h-[180px] rounded-lg bg-[#515050] shadow-[0_8px_24px_rgba(0,0,0,.5)]"></div>
                <div className="w-[90%] h-[25px] rounded-3xl mb-2 mt-4 bg-[#515050]"></div>
                <div className="w-[50%] h-[25px] rounded-3xl bg-[#515050]"></div>
            </div>
        )}
    </>
  )
}

export default SkeletonLoader