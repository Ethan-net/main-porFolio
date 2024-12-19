import React, { useContext } from 'react'
import { NavContext } from '../context/Nav-context'

export default function MyWorks() {
  const { myWork, setMyWork } = useContext(NavContext)
  return (
    <div className='h-full w-full bg-black/50 absolute top-0'>
      <div className='relative top-20 left-[20%] bg-white h-[70vh] w-[60vw] overflow-hidden overflow-y-scroll p-10'>

        <button className='bg-black p-2 text-white rounded-2xl' onClick={()=> setMyWork(!myWork)}>X</button>
        
      
      <h1>My Work Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti nemo iste et quibusdam facilis, perferendis officia aperiam repellat alias dignissimos! Sit id doloremque illum omnis laudantium nihil, perferendis maxime ab.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore repellat facere sed aut labore velit et, quis doloribus! Reprehenderit, quam. Aspernatur at possimus nostrum libero provident non quae quod iste.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum recusandae facere mollitia expedita, nostrum ut repellat corporis repudiandae architecto ea nesciunt debitis illum assumenda minus similique error ducimus minima!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, aut doloremque. Aliquam assumenda voluptates repellat voluptate eum quo officia qui numquam quibusdam nisi, autem praesentium dolores obcaecati totam provident? Sint?
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, ullam eligendi porro est asperiores impedit. Iste numquam doloremque aspernatur fugiat, incidunt ut provident non ad laborum, ipsa quia quidem adipisci.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex possimus, soluta quisquam rem modi consequatur. Eveniet molestiae quae, ipsa ducimus sint recusandae excepturi aperiam consequuntur nostrum alias! Quo, repellendus minus.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam mollitia eveniet doloremque perspiciatis, labore cum qui ullam laboriosam maxime nulla quia dignissimos repellendus voluptates ipsam natus ex sed officia cumque.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sunt vero pariatur dicta eum voluptates earum accusantium ratione nisi ea? Reiciendis neque quibusdam vero vel? Recusandae saepe non voluptates? Necessitatibus!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint impedit rem omnis mollitia quia voluptatibus ullam consectetur reiciendis similique, consequatur distinctio, soluta cupiditate cum. Numquam tempora aperiam earum voluptatem vero!
      </h1>
      </div>
    </div>
  )
}
