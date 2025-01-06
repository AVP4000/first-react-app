import React from 'react';
import PropTypes from 'prop-types';
import FactCard from '@/components/Card';
import { readFacts } from '../../../api/facts';

export default async function ResponseYesPage({ params, searchParams }) {
  const facts = await readFacts(params.userId, searchParams.value);

  return (
    <div>
      {Object.values(facts).map((fact) => (
        <FactCard key={fact.firebaseKey} fact={fact.text} />
      ))}
    </div>
  );
}

ResponseYesPage.propTypes = {
  params: PropTypes.string.isRequired,
  searchParams: PropTypes.string.isRequired,
};
