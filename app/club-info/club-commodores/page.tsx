import PageLayout from '../../../components/PageLayout';

const ClubCommodoresPage = () => {
  const currentCommodore = {
    name: 'Neville Long',
    year: '2025',
    email: 'commodore@gsc.ie',
    phone: '087 206 5297'
  };

  const commodores = [
    { year: 2024, name: 'Kingsley N. Long' },
    { year: 2023, name: 'Kieran O\'Byrne' },
    { year: 2022, name: 'Kieran O\'Byrne' },
    { year: 2021, name: 'Barry Keogh' },
    { year: 2020, name: 'Daphne Hoolahan' },
    { year: 2019, name: 'Daphne Hoolahan' },
    { year: 2018, name: 'Daragh Cafferky' },
    { year: 2017, name: 'Daragh Cafferky' },
    { year: 2016, name: 'David Nixon' },
    { year: 2015, name: 'David Nixon' },
    { year: 2014, name: 'Rodney Beahan' },
    { year: 2013, name: 'Ross Brennan' },
    { year: 2012, name: 'Ross Brennan' },
    { year: 2011, name: 'Simon Herriott' },
    { year: 2010, name: 'Sarah Byrne' },
    { year: 2009, name: 'Sarah Byrne' },
    { year: 2008, name: 'Keith Simpson' },
    { year: 2007, name: 'Keith Simpson' },
    { year: 2006, name: 'Seamus Gilshinan' },
    { year: 2005, name: 'Seamus Gilshinan' },
    { year: 2004, name: 'Mark Usher' },
    { year: 2003, name: 'Mark Usher' },
    { year: 2002, name: 'Paul Sunderland' },
    { year: 2001, name: 'Paul Sunderland' },
    { year: 2000, name: 'David Harris' },
    { year: 1999, name: 'David Harris' },
    { year: 1998, name: 'Frank O\'Rourke' },
    { year: 1997, name: 'Dave Diamond' },
    { year: 1996, name: 'Dave Diamond' },
    { year: 1995, name: 'Tony Dunphy' },
    { year: 1994, name: 'Tony Dunphy' },
    { year: 1993, name: 'Torren Gale' },
    { year: 1992, name: 'Torren Gale' },
    { year: 1991, name: 'John Raughter' },
    { year: 1990, name: 'John Raughter' },
    { year: 1989, name: 'Shane Gale' },
    { year: 1988, name: 'Shane Gale' },
    { year: 1987, name: 'Alan McCracken' },
    { year: 1986, name: 'Alan McCracken' },
    { year: 1985, name: 'Joe Taylor' },
    { year: 1984, name: 'Joe Taylor' },
    { year: 1983, name: 'Tom Butler' },
    { year: 1982, name: 'Tom Butler' },
    { year: 1981, name: 'Nan Avery' },
    { year: 1980, name: 'John Caffrey' },
    { year: 1979, name: 'John Caffrey' },
    { year: 1978, name: 'Louis O\'Neill' },
    { year: 1977, name: 'Louis O\'Neill' },
    { year: 1976, name: 'John Byrne' },
    { year: 1975, name: 'Ian Mitchell' },
    { year: 1974, name: 'Ian Mitchell' },
    { year: 1973, name: 'John Roy' },
    { year: 1972, name: 'John Roy' },
    { year: 1971, name: 'T.V. Davis' },
    { year: 1970, name: 'T.V. Davis' },
    { year: 1969, name: 'Dermod Cafferky' },
    { year: 1968, name: 'Dermod Cafferky', isFounder: true }
  ];

  return (
    <PageLayout 
      title="Club Commodores" 
      description="Honor roll of past and present commodores of Greystones Sailing Club"
    >
      <div className="prose prose-lg max-w-none">
        <div className="bg-blue-600 text-white rounded-lg shadow-md p-4 mb-6">
          <h2 className="text-xl font-bold mb-3">Current Commodore</h2>
          <div>
            <h3 className="text-lg font-semibold">{currentCommodore.name}</h3>
            <p className="text-blue-100 mb-1">Commodore {currentCommodore.year}</p>
            <p className="text-sm text-blue-100">
              <a href={`mailto:${currentCommodore.email}`} className="hover:text-white">
                {currentCommodore.email}
              </a> • 
              <a href={`tel:${currentCommodore.phone.replace(/\s/g, '')}`} className="ml-1 hover:text-white">
                {currentCommodore.phone}
              </a>
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-bold text-blue-900 mb-4">Club Commodores by Year</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {commodores.map((commodore) => (
              <div 
                key={`${commodore.year}-${commodore.name}`}
                className="bg-gray-50 rounded-lg p-3 text-center hover:bg-gray-100 transition-colors"
              >
                <div className="font-semibold text-blue-900 text-lg">{commodore.year}</div>
                <div className="text-gray-700 text-sm mt-1 leading-tight">
                  {commodore.name}
                </div>
                {commodore.isFounder && (
                  <div className="text-xs text-green-600 font-medium mt-1">
                    Founding
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ClubCommodoresPage;