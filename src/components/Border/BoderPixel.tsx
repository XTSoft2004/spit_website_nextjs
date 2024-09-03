interface BorderProps {
    direction: 'top' | 'right' | 'bottom' | 'left'; // Chỉ cho phép 4 hướng này
    width?: number;  // Tùy chọn (có thể không nhập)
    height?: number; // Tùy chọn (có thể không nhập)
    pixel: number;
    color: string;
}

const ItemCarousel = ({ direction, width = 0, height = 0, pixel, color = '#fff' }: BorderProps) => {
    // Xây dựng border style dựa trên direction
    const borderStyle = {
        borderTop: direction === 'top' ? `${pixel}px solid ${color}` : undefined,
        borderRight: direction === 'right' ? `${pixel}px solid ${color}` : undefined,
        borderBottom: direction === 'bottom' ? `${pixel}px solid ${color}` : undefined,
        borderLeft: direction === 'left' ? `${pixel}px solid ${color}` : undefined,
    };

    return (
        <div className="rounded" style={{ width: `${width}%`, height: `${height}%`, ...borderStyle }}></div>
    );
}

export default ItemCarousel;
