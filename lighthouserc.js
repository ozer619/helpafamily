module.exports = {
  ci: {
    collect: {
      url: ['steps.vercel_preview_url.outputs.preview_url'],
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.8 }],
        'categories:best-practices': ['error', { minScore: 0.92 }],
        'categories:seo': ['error', { minScore: 0.9 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
