import React from 'react';

const SchemeLinksPage = () => {
  const videoLinks = [
    {
      title: 'KYC | Anti Money Laundering and Know Your Customer',
      url: 'https://www.youtube.com/watch?v=c_xI4N1RRfU',
      desc: 'A detailed explanation by IBS Institute, covering KYC and AML concepts in banking'
    },
    {
      title: 'Understanding the Elements of KYC Policy in India',
      url: 'https://www.youtube.com/watch?v=ircFzhfmOfg',
      desc: 'A complete guide by Prabin Sharma, a seasoned banker'
    },
    {
      title: 'How to Open a Bank Account',
      url: 'https://www.youtube.com/watch?v=cGpezin0IYY',
      desc: 'Simple step-by-step guide to open a bank account'
    },
    {
      title: 'UPI & Digital Banking Guide',
      url: 'https://www.youtube.com/watch?v=ZRs7sCwRkz8',
      desc: 'Learn how to use UPI and digital banking tools safely'
    }
  ];

  const schemeLinks = [
    { title: 'Aajeevika - DAY NRLM Official Site', url: 'https://aajeevika.gov.in/' },
    { title: 'DAY NRLM eGov Application', url: 'https://share.google/MGn65L0HLFrL4XuKP' },
    { title: 'Mahatma Gandhi NREGA', url: 'https://share.google/DT25QUmTb3cOn7ffD' },
    { title: 'Subsidy Scheme for SHGs of Minorities', url: 'https://share.google/Ool8F669o5tmTKX1z' },
    { title: 'SHG Banking Agents PDF', url: 'https://share.google/cDd8Y9OK7KiJRYF2T' },
    { title: 'Government Initiatives - NSI', url: 'https://www.nsiindia.gov.in/(S(kfvmijb5ytxtbo34zv4eskvo))/InternalPage.aspx?Id_Pk=89' },
    { title: 'Post Office Savings Scheme', url: 'https://www.myscheme.gov.in/schemes/mssc' },
    { title: 'PIB Press Release', url: 'https://www.pib.gov.in/newsite/PrintRelease.aspx?relid=85832' },
    { title: 'Bank Sakhi Training', url: 'https://socialwelfare.vikaspedia.in/viewcontent/social-welfare/rural-poverty-alleviation-1/self-help-groups/bank-sakhi?lgn=en' },
    { title: 'DAY NRLM Scheme Info', url: 'https://www.myscheme.gov.in/schemes/day-nrlm' },
    { title: 'SSSHGM Scheme', url: 'https://www.myscheme.gov.in/schemes/ssshgm' },
    { title: 'Computer Concepts CCC', url: 'https://www.nielit.gov.in/ajmer/content/course-computer-concepts-ccc-0' },
    { title: 'SHG Finance - Union Bank', url: 'https://www.unionbankofindia.co.in/en/Details/shg-finance' },
    { title: 'PMGDISHA Scheme', url: 'https://www.myscheme.gov.in/schemes/pmgdisha' }
  ];

  const bookResources = [
    { title: 'Bank Sakhi eBook (Vikaspedia)', url: 'https://socialwelfare.vikaspedia.in/viewcontent/social-welfare/rural-poverty-alleviation-1/self-help-groups/bank-sakhi?lgn=en' },
    { title: 'finacial literacy', url: 'https://financialfreedomisajourney.com/wp-content/uploads/2024/09/Money-Works-The-Guide-To-Financial-Literacy-Abhijeet-Kolapkar.pdf' },
    { title: 'upi', url: 'https://www.npci.org.in/PDF/npci/upi/Product-Booklet.pdf' },
  
  ];

  
  return (
    <div style={pageWrapper}>
      <h2 style={pageTitle}>💡 Financial Literacy & Schemes Resources</h2>

      <section style={sectionStyle}>
        <h3>📺 Video Guides</h3>
        <ul>
          {videoLinks.map((link, i) => (
            <li key={i}><a href={link.url} target="_blank" rel="noopener noreferrer">{link.title}</a> – {link.desc}</li>
          ))}
        </ul>
      </section>

      <section style={sectionStyle}>
        <h3>📄 Government Schemes</h3>
        <ul>
          {schemeLinks.map((link, i) => (
            <li key={i}><a href={link.url} target="_blank" rel="noopener noreferrer">{link.title}</a></li>
          ))}
        </ul>
      </section>

      <section style={sectionStyle}>
        <h3>📚 Books & PDFs</h3>
        <ul>
          {bookResources.map((book, i) => (
            <li key={i}><a href={book.url} target="_blank" rel="noopener noreferrer">{book.title}</a></li>
          ))}
        </ul>
      </section>

     
    </div>
  );
};

export default SchemeLinksPage;

const pageWrapper = {
  backgroundColor: '#f9f2fc',
  padding: '2rem 1rem',
  fontFamily: 'Segoe UI, sans-serif'
};

const pageTitle = {
  fontSize: '2rem',
  textAlign: 'center',
  color: '#5c2d91',
  marginBottom: '2rem'
};

const sectionStyle = {
  marginBottom: '2rem',
  backgroundColor: '#fff',
  padding: '1.5rem',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
};
