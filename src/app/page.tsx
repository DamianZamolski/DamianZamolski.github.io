const redirectScript = `(function(){try{var s=localStorage.getItem('locale');var l=s||(navigator.language&&navigator.language.toLowerCase().startsWith('pl')?'pl':'en');location.replace('/'+l+location.search+location.hash);}catch(e){location.replace('/en');}})();`;

export default function RootRedirectPage() {
  return <script dangerouslySetInnerHTML={{ __html: redirectScript }} />;
}
