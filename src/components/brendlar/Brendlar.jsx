import './Brendlar.css'

const Brendlar = () => {

    
  const brands = [
    { name: 'Asus', img: 'https://s3.fortifai.uz/shop/rand/77/9a/7b/779a7b20-f0c0-49de-acdf-50478cc97bd6.png' },
    { name: 'Avalon', img: 'https://s3.fortifai.uz/shop/rand/73/57/24/73572430-663c-48c7-91c1-a60c3c9a9945.png' },
    { name: 'Bosch', img: 'https://s3.fortifai.uz/shop/rand/fa/b7/27/fab72776-6868-49f6-9779-67674ecd5c5b.png' },
    { name: 'Huawei', img: 'https://s3.fortifai.uz/shop/rand/49/e2/8f/49e28fa7-e4ad-4297-aaec-aa4744f578f0.png' },
    { name: 'LG', img: 'https://s3.fortifai.uz/shop/rand/85/de/ce/85dece29-5aa8-4203-8a20-6b174a13a1b9.png' },
    { name: 'Oppo', img: 'https://s3.fortifai.uz/shop/rand/50/5f/ed/505feda8-b485-4a5e-b74a-8268df4fa956.png' },
    { name: 'Premier', img: 'https://s3.fortifai.uz/shop/catalog/brands/1701762267-premier-_1_.png' },
    { name: 'Realme', img: 'https://s3.fortifai.uz/shop/catalog/brands/1693546545-image_2023-09-01_10-35-03.png' },
    { name: 'Tecno', img: 'https://s3.fortifai.uz/shop/rand/45/ff/00/45ff00cd-d451-4cfb-9f77-9e2b889a082f.png' },
    { name: 'Vivo', img: 'https://s3.fortifai.uz/shop/rand/d7/e8/b5/d7e8b5dc-26a9-4638-b4ff-5abd396fc6bd.png' },
    { name: 'Apple', img: 'https://s3.fortifai.uz/shop/rand/f3/db/07/f3db0718-78e6-4d2d-888c-dd65ffcc0178.png' },
    { name: 'Samsung', img: 'https://s3.fortifai.uz/shop/rand/6e/92/c8/6e92c8d6-0c7e-4ac7-b7d6-464439efc1e8.png' },
    { name: 'Xiaomi', img: 'https://s3.fortifai.uz/shop/rand/2e/ef/ce/2eefcefc-8100-4abd-bd01-8bcf6f9ab679.png' },
    { name: 'Artel', img: 'https://s3.fortifai.uz/shop/rand/de/e5/88/dee58804-874e-4b6c-bc7d-a920b456b736.png' },
    { name: 'Shivaki', img: 'https://s3.fortifai.uz/shop/rand/25/56/61/2556618e-e7d5-423e-92aa-f58972bb7c16.png' },
    { name: 'Honor', img: 'https://s3.fortifai.uz/shop/rand/ea/b9/88/eab9881e-e0fc-4864-882b-2556fd8e267f.png' }
  ];
    return (
        <div className="brands-container">
        <h2>Mashhur brendlar</h2>
        <div className="brands-grid">
          {brands.map((brand, index) => (
            <div className="brand-card" key={index}>
              <img src={brand.img} alt={brand.name} />
              <p>{brand.name}</p>
            </div>
          ))}
        </div>
      </div>
    )
}

export default Brendlar
