import React from "react";
import Link from "next/link";
import { flamelinkApp } from "../../lib/flamelink";

const ProductSingle = (product) => (
  <>
    <dl>
      <dt>id</dt>
      <dd>{product.id}</dd>
      <dt>eventName</dt>
      <dd>
      {/* <a href={product.slug}>{product}</a> */}
      <Link href="/products/[product]" as={`/products/${product.id}`}>
          <a>{product.eventName}</a>
      </Link>
      </dd>

      <dt>start</dt>
      <dd>{product.start}</dd>
      <dt>end</dt>
      <dd>{product.end}</dd>

      <dt>location</dt>
      <dd>{product.location.address}
        {/* ({product.location.address.lat}, {product.location.address.lng}) */}
        </dd>

      <dt>image(s)</dt>
      <dd>{product.image.map((e, i) => <div><img src={e.src} alt="" key={i} /></div>)}</dd>

      <dt>description</dt>
      <dd>{product.description}</dd>

      <dt>suitableForAges</dt>
      <dd>{product.suitableForAges}</dd>

      <dt>additionalInfo</dt>
      <dd>{product.additionalInfo}</dd>
      <dt>cancellationPolicy</dt>
      <dd>{product.cancellationPolicy}</dd>
      <dt>extraInfo</dt>
      <dd>{product.extraInfo}</dd>

      <dt>laptopRequired</dt>
      <dd>{product.laptopRequired}</dd>

      <dt>priorCodingExperienceRequired</dt>
      <dd>{product.priorCodingExperienceRequired}</dd>

      <dt>registrationDateEnd</dt>
      <dd>{product.registrationDateEnd}</dd>
      <dt>registrationDateStart</dt>
      <dd>{product.registrationDateStart}</dd>

      <dt>partner(s)</dt>
      <dd>{product.partners.map((e, i) => <div><img src={e.src} alt="" key={i}/></div>)}</dd>
      <dt>sponsors(s)</dt>
      <dd>{product.sponsors.map((e, i) => <div><img src={e.src} alt="" key={i}/></div>)}</dd>

      <dt>categories</dt>
      <dd>{product.categories.map((e, i) => <span key={i}>{i > 0 ? ', ' : ''}<em>{e}</em></span>)}</dd>
      <dt>tags</dt>
      <dd>{product.tags.map((e, i) => <span key={i}>{i > 0 ? ', ' : ''}<em>{e}</em></span>)}</dd>
      <dt>published</dt>
      <dd>{product.published ? "YES" : "NO"}</dd>
    </dl>
  </>
);

const Products = (props) => {
  return (
    <>
      <h1>pages/products</h1>
      <Link href="/">
        <a>Go back to TOP</a>
      </Link>
      <ul>
        {props.products.map((product) => {
          return (
            <li key={product.id}>
              {ProductSingle(product)}
            </li>
          );
        })}
      </ul>
    </>
  );
}

Products.getInitialProps = async () => {
  const result = await flamelinkApp.content
    .get({
      schemaKey: 'events',
      fields: [
        'id',
        'eventName',
        // 'eventType', // @FIXME - results in "Circular structure"
        'description',
        'image',

        'additionalInfo',
        'cancellationPolicy',
        'categories',
        'end',
        'extraInfo',
        'laptopRequired',
        'location',
        'address',
        'partners',
        'priorCodingExperienceRequired',
        'published',
        'registrationDateEnd',
        'registrationDateStart',
        'sponsors',
        'start',
        'suitableForAges',
        'tags',
        'teamLeaders',

        'seo',
        'slug',
      ],

     })
    .then(snapshot => {
      let data = [];
      snapshot && Object.values(snapshot).forEach(doc => {
        data.push(
          {...doc}
        );
      });

      return data;
    }
    );
  // console.log ({ products: result });
  return { products: result };
};

export default Products;
