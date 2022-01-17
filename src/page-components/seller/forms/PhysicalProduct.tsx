/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import ImageUploading, { ImageListType, ImageType } from 'react-images-uploading';
import { AiOutlineClose, AiOutlineCloudUpload } from 'react-icons/ai'
import toast from 'react-hot-toast';



interface IProps {
    savePhysicalProductOnServer: (formData: FormData, values: { title: string, description: string, price: number, isOnSale: boolean, isFeatured: boolean, quantity: number, salePirce: number }) => void
}

const PhysicalProductForm = ({ savePhysicalProductOnServer }: IProps) => {
    const [productImages, setProductImages] = useState<ImageListType>([]);
    const [productThumbnail, setProductThumbnail] = useState<ImageListType>([])
    const [productOnSale, setProductOnSale] = useState(false);
    const [isFeaturedProduct, setIsFeaturedProduct] = useState(false);
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [productSalePrice, setProductSalePrice] = useState('0');
    const [productPrice, setProductPrice] = useState('0');
    const [productQuantity, setProductQuantity] = useState('0');

    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const formData = new FormData();
        // const images: any[] = []
        // productImages.forEach((image, i) => images.push(image.file))
        if (productImages.length > 0 && productThumbnail.length > 0 && title && description && productPrice && productSalePrice && productImages) {
            const thumbnail = productThumbnail[0].file!;
            formData.append('thumbnail', thumbnail)
            for (let index = 0; index < productImages.length; index++) {
                const element = productImages[index];
                formData.append(`images`, element.file!)
            }
            savePhysicalProductOnServer(formData, { description: description, isFeatured: isFeaturedProduct, isOnSale: productOnSale, price: Number(productPrice), quantity: Number(productQuantity), salePirce: Number(productSalePrice), title })
        } else {
            toast.error("All feilds are required.")
        }
    }


    const handleChangeProductImages = (imagesList: ImageListType, addUpdateIndex: number[] | undefined) => {
        setProductImages(imagesList as never[]);
    }
    const handleProductThumbnail = (image: ImageListType, addUpdateIndex: number[] | undefined) => {
        setProductThumbnail(image as never[]);
    }


    return (
        <div>
            <div className='grid grid-cols-2'>
                <div className='text-center justify-self-center font-bold tracking-widest'>
                    Create Physical Product
                </div>
                <div className='justify-self-end'>
                    <button onClick={() => router.push('/seller/dashboard')} className='font-semibold duration-300 hover:translate-y-2'>Cancel</button>
                </div>
            </div>
            {/* FORM */}
            <form onSubmit={handleSubmit} className='mt-5 w-3/4 mx-auto'>
                {/* Details Section */}
                <div className='mt-10'>
                    <h1 className='font-semibold text-lg tracking-wider'>Details</h1>
                    <div className='my-2'>
                        <h3 className='font-medium text-xs'>Product Name</h3>
                        <input
                            type="text"
                            className="focus:outline-none my-1 w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white "
                            placeholder="Add product name"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                    </div>
                    <div className='my-2'>
                        <h3 className='font-medium text-xs'>Description</h3>
                        <textarea
                            className="focus:outline-none my-1 w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white "
                            placeholder="Add description..."
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                    </div>
                </div>
                {/*END  Details Section */}
                <hr />


                {/* Images Section */}
                <div className='mt-10'>
                    <h1 className='font-semibold text-lg tracking-wider'>Images</h1>
                    <div className={`my-2 h-80  overflow-scroll`}>
                        <ImageUploading multiple value={productImages} onChange={handleChangeProductImages} maxNumber={5} >
                            {({ imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove, isDragging, dragProps, errors }) => (
                                <div className='w-full'>
                                    <div className='pb-6' onClick={onImageUpload}>
                                        <AiOutlineCloudUpload className='mx-auto text-5xl' />
                                        <p className='text-center'>Upload images</p>
                                    </div>
                                    <div className='grid grid-cols-3 gap-4 items-center'>
                                        {imageList.length > 0 && imageList.map((image, i) => {
                                            return <>
                                                <div className='relative' key={i}>
                                                    <img className=" max-w-full h-48 overflow-hidden rounded-lg" src={image.dataURL} alt="" />
                                                    <AiOutlineClose onClick={() => onImageRemove(i)} className='absolute top-0 right-0 text-black cursor-pointer font-extrabold text-xl mt-2 mr-2'
                                                    />
                                                </div>
                                            </>
                                        })}
                                    </div>
                                </div>
                            )}
                        </ImageUploading>
                        {/* Upload Thumbnail */}
                        <ImageUploading maxNumber={1} value={productThumbnail} onChange={handleProductThumbnail}>
                            {({ imageList, onImageUpload, onImageRemove, onImageUpdate }) => (
                                <div>
                                    {productImages.length > 0 && <div>
                                        <div className='pb-6 mt-5' onClick={onImageUpload}>
                                            <AiOutlineCloudUpload className='mx-auto text-5xl' />
                                            <p className='text-center'>Upload Product Thumbnail</p>
                                        </div>
                                        <div>
                                            {imageList.map((img, i) => (
                                                <div className='relative w-1/2 mx-auto' key={i}>
                                                    <img className=" max-w-full h-32 overflow-hidden rounded-lg" src={img.dataURL} alt="" onClick={() => onImageUpdate(i)} />
                                                    <AiOutlineClose onClick={() => onImageRemove(i)} className='absolute top-0 right-0 text-black cursor-pointer font-extrabold text-xl mt-2 mr-2'
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>}
                                </div>
                            )}
                        </ImageUploading>
                    </div>
                </div>
                {/*END  Images Section */}

                <hr />
                {/* Inventory */}
                <div className='mt-10'>
                    <h1 className='font-semibold text-lg tracking-wider'>Inventory</h1>
                    <div className='my-2'>
                        <h3 className='font-medium text-xs'>Product Price</h3>
                        <input
                            type="number"
                            className={`"focus:outline-none my-1 w-1/2 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white"
                            ${productOnSale ? "line-through" : ""}
                            `}
                            placeholder="Add product price"
                            disabled={productOnSale}
                            value={productPrice}
                            onChange={e => setProductPrice(e.target.value)}
                        />
                    </div>
                    <div className='my-2 flex items-center'>
                        <h3 className='font-medium text-xs'>On-Sale</h3>
                        <input type="checkbox" checked={productOnSale} onChange={() => setProductOnSale(!productOnSale)} className="toggle ml-10" />
                    </div>

                    {productOnSale && <div className='mt-1'>
                        <h3 className='font-medium text-xs'>Sale Price</h3>
                        <input
                            type="number"
                            className="focus:outline-none my-1 w-1/3 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white "
                            placeholder="Add sale price"
                            value={productSalePrice}
                            onChange={e => setProductSalePrice(e.target.value)}
                        />
                    </div>
                    }
                </div>
                {/* Quantity */}
                <div className='mt-10'>
                    <div className='my-2'>
                        <h3 className='font-medium text-xs'>Quantity</h3>
                        <input
                            type="number"
                            className={`"focus:outline-none my-1 w-1/2 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:border-none focus:text-gray-700 focus:bg-white"
                            `}
                            placeholder="Add product quantity"
                            value={productQuantity}
                            onChange={e => setProductQuantity(e.target.value)}
                        />
                    </div>

                </div>
                {/* END Inventory */}

                <hr />
                {/* Visibility */}
                <div className="mt-10">
                    <h1 className='font-semibold text-lg tracking-wider'>Visibility</h1>
                    <div className='my-2 flex items-center'>
                        <h3 className='font-medium text-sm'>Featured Product</h3>
                        <input type="checkbox" checked={isFeaturedProduct} onChange={() => setIsFeaturedProduct(!isFeaturedProduct)} className="toggle ml-10" />
                    </div>
                    <p className='text-gray-400 text-xs'>Featured Products can be displayed in Summary Blocks on your page</p>
                </div>
                {/* END Visibility */}

                {/* Submit Button */}
                <div className='mt-10'>
                    <button type='submit' className='mx-auto border block py-3 px-16 font-bold border-black hover:scale-125 duration-500 hover:border-white hover:bg-black hover:text-white'>Save</button>
                </div>
            </form>

        </div>
    )
}

export default PhysicalProductForm
