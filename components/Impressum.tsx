import React from 'react';
import { FileText } from 'lucide-react';
import EditableText from './EditableText';

const Impressum: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <div className="text-center mb-10">
        <div className="inline-block p-3 bg-emerald-100 rounded-full text-emerald-600 mb-4">
          <FileText size={32} />
        </div>
        <h1 className="text-4xl font-serif font-bold text-gray-800 mb-4">
          <EditableText id="impressum" defaultText="Impressum" />
        </h1>
        <div className="h-1 w-24 bg-emerald-500 mx-auto rounded-full"></div>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-gray-700 space-y-6">
        <section>
          <h2 className="text-xl font-bold text-emerald-800 mb-2">
            <EditableText id="imprSection1Title" defaultText="Angaben gemäß § 5 TMG" />
          </h2>
          <EditableText 
            id="imprAddress" 
            defaultText="LearnKoran.de\nMusterstraße 1\n10115 Berlin\nDeutschland" 
            multiline
            className="whitespace-pre-wrap block"
          />
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-800 mb-2">
            <EditableText id="imprContactTitle" defaultText="Kontakt" />
          </h2>
          <p>
            <EditableText id="imprContactDetails" defaultText="Telefon: +49 (0) 123 456789\nE-Mail: info@learnkoran.de" multiline className="whitespace-pre-wrap block"/>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-800 mb-2">
            <EditableText id="imprResponsibleTitle" defaultText="Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV" />
          </h2>
          <p>
             <EditableText id="imprResponsibleDetails" defaultText="Max Mustermann\nMusterstraße 1\n10115 Berlin" multiline className="whitespace-pre-wrap block"/>
          </p>
        </section>

        <section className="text-sm text-gray-500 pt-4 border-t border-gray-100">
          <h3 className="font-bold mb-1"><EditableText id="imprDisclaimerTitle" defaultText="Haftungsausschluss:" /></h3>
          <p>
            <EditableText id="imprDisclaimerText" defaultText="Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen." multiline />
          </p>
        </section>
      </div>
    </div>
  );
};

export default Impressum;