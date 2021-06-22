import { StarIcon } from '@heroicons/react/solid'
import { useState } from 'react'

export default function Rating() {
    const [rating] = useState(Math.floor(Math.random() * (5 - 1 + 1)) + 1)

    return (
       <div className="product-rating color-rating d-flex">
        {Array(rating)
          .fill()
          .map(() => (
            <StarIcon className="w-15" />
        ))}
      </div>
    )
}
