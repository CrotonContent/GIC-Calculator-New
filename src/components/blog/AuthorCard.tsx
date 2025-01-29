import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Briefcase, Award, BookOpen, Mic, Users } from 'lucide-react';
import type { Author } from '../../types/blog';

interface Props {
  author: Author;
  showFull?: boolean;
}

const AuthorCard: React.FC<Props> = ({ author, showFull = false }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={author.avatar}
          alt={author.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <Link to={`/blog/author/${author.slug}`} className="hover:underline">
            <h3 className="text-xl font-semibold text-gray-900">{author.name}</h3>
          </Link>
          <p className="text-gray-600">{author.role}</p>
        </div>
      </div>

      {showFull ? (
        <>
          <div className="prose prose-sm mb-6">
            <p className="text-gray-700">{author.bio}</p>
          </div>
          
          {author.expertise && author.expertise.length > 0 && (
            <div className="mb-6">
              <h4 className="flex items-center gap-2 text-sm font-semibold text-gray-900 mb-2">
                <Award className="w-4 h-4" />
                Areas of Expertise
              </h4>
              <div className="flex flex-wrap gap-2">
                {author.expertise.map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          )}

          {author.professional_experience && author.professional_experience.length > 0 && (
            <div className="mb-6">
              <h4 className="flex items-center gap-2 text-sm font-semibold text-gray-900 mb-2">
                <Briefcase className="w-4 h-4" />
                Professional Experience
              </h4>
              <ul className="space-y-2">
                {author.professional_experience.map((exp, index) => (
                  <li key={index} className="text-sm text-gray-600">
                    <span className="font-medium">{exp.role}</span> at {exp.company}
                    <span className="text-gray-500"> • {exp.period}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {author.education && author.education.length > 0 && (
            <div className="mb-6">
              <h4 className="flex items-center gap-2 text-sm font-semibold text-gray-900 mb-2">
                <BookOpen className="w-4 h-4" />
                Education
              </h4>
              <ul className="space-y-2">
                {author.education.map((edu, index) => (
                  <li key={index} className="text-sm text-gray-600">
                    {edu.degree} - {edu.institution} ({edu.year})
                  </li>
                ))}
              </ul>
            </div>
          )}

          {author.certifications && author.certifications.length > 0 && (
            <div className="mb-6">
              <h4 className="flex items-center gap-2 text-sm font-semibold text-gray-900 mb-2">
                <Award className="w-4 h-4" />
                Certifications
              </h4>
              <ul className="space-y-2">
                {author.certifications.map((cert, index) => (
                  <li key={index} className="text-sm text-gray-600">
                    {cert.name} - {cert.organization} ({cert.year})
                  </li>
                ))}
              </ul>
            </div>
          )}

          {author.publications && author.publications.length > 0 && (
            <div className="mb-6">
              <h4 className="flex items-center gap-2 text-sm font-semibold text-gray-900 mb-2">
                <BookOpen className="w-4 h-4" />
                Publications
              </h4>
              <ul className="space-y-2">
                {author.publications.map((pub, index) => (
                  <li key={index} className="text-sm text-gray-600">
                    "{pub.title}" - {pub.publisher} ({pub.year})
                  </li>
                ))}
              </ul>
            </div>
          )}

          {author.speaking_engagements && author.speaking_engagements.length > 0 && (
            <div className="mb-6">
              <h4 className="flex items-center gap-2 text-sm font-semibold text-gray-900 mb-2">
                <Mic className="w-4 h-4" />
                Speaking Engagements
              </h4>
              <ul className="space-y-2">
                {author.speaking_engagements.map((event, index) => (
                  <li key={index} className="text-sm text-gray-600">
                    "{event.title}" - {event.venue} ({event.year})
                  </li>
                ))}
              </ul>
            </div>
          )}

          {author.memberships && author.memberships.length > 0 && (
            <div className="mb-6">
              <h4 className="flex items-center gap-2 text-sm font-semibold text-gray-900 mb-2">
                <Users className="w-4 h-4" />
                Professional Memberships
              </h4>
              <ul className="space-y-2">
                {author.memberships.map((membership, index) => (
                  <li key={index} className="text-sm text-gray-600">
                    {membership.name} - {membership.status}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      ) : (
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{author.bio}</p>
      )}

      <div className="flex gap-4">
        {author.social?.linkedin && (
          <a
            href={author.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        )}
        {author.social?.twitter && (
          <a
            href={author.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-400"
            aria-label="Twitter Profile"
          >
            <Twitter className="w-5 h-5" />
          </a>
        )}
      </div>
    </div>
  );
};

export default AuthorCard;