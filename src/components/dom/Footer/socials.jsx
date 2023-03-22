import {
  EnvelopeSimple,
  FacebookLogo,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  PinterestLogo,
  RedditLogo,
  TiktokLogo,
  TwitchLogo,
  TwitterLogo,
  WhatsappLogo,
  YoutubeLogo,
} from 'phosphor-react'

export const Socials = ({ socials }) => {
  return (
    <div className='flex gap-4 text-2xl text-gray-100 md:text-xl '>
      {socials?.facebookUrl && (
        <a href={socials.facebookUrl} target='_blank' rel='noreferrer noopener'>
          <FacebookLogo />
        </a>
      )}
      {socials?.instagramUrl && (
        <a href={socials.instagramUrl} target='_blank' rel='noreferrer noopener'>
          <InstagramLogo />
        </a>
      )}
      {socials?.twitterUrl && (
        <a href={socials.twitterUrl} target='_blank' rel='noreferrer noopener'>
          <TwitterLogo />
        </a>
      )}
      {socials?.whatsappUrl && (
        <a href={socials.whatsappUrl} target='_blank' rel='noreferrer noopener'>
          <WhatsappLogo />
        </a>
      )}
      {socials?.youtubeUrl && (
        <a href={socials.youtubeUrl} target='_blank' rel='noreferrer noopener'>
          <YoutubeLogo />
        </a>
      )}
      {socials?.githubUrl && (
        <a href={socials.githubUrl} target='_blank' rel='noreferrer noopener'>
          <GithubLogo />
        </a>
      )}
      {socials?.linkedinUrl && (
        <a href={socials.linkedinUrl} target='_blank' rel='noreferrer noopener'>
          <LinkedinLogo />
        </a>
      )}
      {socials?.pinterestUrl && (
        <a href={socials.pinterestUrl} target='_blank' rel='noreferrer noopener'>
          <PinterestLogo />
        </a>
      )}
      {socials?.redditUrl && (
        <a href={socials.redditUrl} target='_blank' rel='noreferrer noopener'>
          <RedditLogo />
        </a>
      )}
      {socials?.twitchUrl && (
        <a href={socials.twitchUrl} target='_blank' rel='noreferrer noopener'>
          <TwitchLogo />
        </a>
      )}
      {socials?.tiktokUrl && (
        <a href={socials.tiktokUrl} target='_blank' rel='noreferrer noopener'>
          <TiktokLogo />
        </a>
      )}
      {socials?.mailTo && (
        <a href={socials.mailTo} target='_blank' rel='noreferrer noopener'>
          <EnvelopeSimple />
        </a>
      )}
    </div>
  )
}
