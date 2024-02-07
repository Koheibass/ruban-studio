
/**
 * セクションヘッダ
 */
export const SectionHeader = ({ id, title, titleEn }) => {
    return (
        <h2 className="leading-none font-bold text-[28px] text-center py-8 m-0 text-[#937a43] font-noto" id={id}>
            <div>{title}</div>
            <div className="translate">{titleEn}</div>
        </h2>
    )
}