import Section from './Section';
import { portfolioData } from '@/data/portfolio';
import Image from 'next/image';

function IssuerBadge({ issuer, logoUrl }: { issuer: string; logoUrl?: string }) {
  if (logoUrl) {
    return (
      <div className="h-12 w-12 rounded-xl bg-white border border-gray-300 flex items-center justify-center shrink-0 p-1 overflow-hidden">
        <Image
          src={logoUrl}
          alt={`${issuer} logo`}
          className="h-full w-full object-contain"
          width={48}
          height={48}
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className="h-12 w-12 rounded-xl bg-emerald-900/40 border border-emerald-700/50 flex items-center justify-center shrink-0">
      <span className="text-lg font-semibold text-emerald-300">{issuer.charAt(0).toUpperCase()}</span>
    </div>
  );
}

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <Section id="certifications">
      <h2 className="text-3xl font-bold text-white mb-10 text-center">Certifications</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="rounded-2xl border border-gray-700/60 bg-gray-900/60 shadow-lg shadow-black/20 overflow-hidden"
          >
            <div className="p-5 sm:p-6 border-b border-gray-700/60">
              <div className="flex items-start gap-4">
                <IssuerBadge issuer={cert.issuer} logoUrl={cert.logoUrl} />
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-[0.18em] text-gray-400 mb-1">License & Certification</p>
                  <h3 className="text-xl font-semibold text-gray-100 leading-snug">{cert.title}</h3>
                  <p className="text-sm text-gray-300 mt-1">{cert.issuer}</p>
                </div>
              </div>
            </div>
            <div className="p-5 sm:p-6">
              <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
                <div>
                  <dt className="text-gray-500">Issued</dt>
                  <dd className="text-gray-100 mt-1">{cert.issueDate}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Expires</dt>
                  <dd className="text-gray-100 mt-1">{cert.expirationDate ?? 'Not specified'}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Credential ID</dt>
                  <dd className="text-gray-100 mt-1 break-all">{cert.credentialId ?? 'Not provided'}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Issued by</dt>
                  <dd className="text-gray-100 mt-1">{cert.issuer}</dd>
                </div>
              </dl>

              {cert.skills && cert.skills.length > 0 && (
                <div className="mt-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-gray-500 mb-2">Skills</p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={`${cert.id}-${skill}`}
                        className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-800 border border-gray-700 text-gray-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-5 flex flex-wrap gap-4">
                <a
                  href={cert.pdfUrl}
                  className="text-sm font-medium text-emerald-300 hover:text-emerald-200 underline underline-offset-4"
                  target="_blank"
                  rel="noreferrer"
                >
                  Show credential
                </a>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    className="text-sm font-medium text-gray-300 hover:text-white underline underline-offset-4"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Verify on issuer site
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
