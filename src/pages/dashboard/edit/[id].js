import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import { endpoints } from '@services/api';

import FormProduct from '@components/FormProducts';

export default function Edit() {
  const [product, setProduct] = useState({});
  const [notFound, setNotFound] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const { id } = router.query;
    if (!router.isReady) return;

    async function getProduct() {
      try {
        const response = await axios.get(endpoints.products.getProduct(id));
        setProduct(response.data);
      } catch (error) {
        console.log(error);
        setNotFound(true);
      }
    }
    getProduct();
  }, [router?.isReady]);

  return notFound ? <div> Product Not Found </div> : <FormProduct product={product} />;
}
