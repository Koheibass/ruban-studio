
/**
 * セクションヘッダ
 */
export const SectionHeader = ({ id, title, titleEn }) => {
    return (
        <h2 className="element__title" id={id}>
            <div>{title}!</div>
            <div className="translate">{titleEn}</div>
        </h2>
    )
}