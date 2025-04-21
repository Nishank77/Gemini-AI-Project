import React from "react";

export default function ChatResponse({ response }) {
  if (!response) {
    return null;
  }

  const { candidates, usageMetadata } = response;

  return (
    <div className="container my-8 px-4">
      <h3 className="text-2xl font-bold mb-4 text-gray-800">Response</h3>

      {candidates.map((candidate, index) => (
        <div
          key={index}
          className="mb-6 bg-white shadow-md rounded-lg p-6 border border-gray-200"
        >
          <h4 className="text-2xl font-bold mb-4 text-blue-600">Answer</h4>
          <p className="text-lg text-gray-700 mb-6">
            {candidate.content.parts[0].text}
          </p>

          {candidate?.citationMetadata?.citationSources?.length > 0 && (
            <div>
              <h6 className="text-lg font-semibold text-gray-800 mb-2">
                Citations
              </h6>
              <ul className="list-disc list-inside">
                {candidate.citationMetadata.citationSources.map(
                  (source, idx) => (
                    <li key={idx} className="text-blue-500 hover:underline">
                      <a href={source.url} target="_blank" rel="noreferrer">
                        {source.url}
                      </a>{" "}
                      <span className="text-gray-600 text-sm">
                        (Indexes: {source.startIndex} - {source.endIndex})
                      </span>
                    </li>
                  )
                )}
              </ul>
            </div>
          )}
        </div>
      ))}

      <div className="bg-gray-100 rounded-lg p-4 shadow-md">
        <h4 className="text-lg font-semibold text-gray-800 mb-2">
          Usage Metadata
        </h4>
        <p className="text-sm text-gray-700">
          <strong>Prompt Tokens:</strong> {usageMetadata.promptTokenCount}
        </p>
        <p className="text-sm text-gray-700">
          <strong>Response Tokens:</strong> {usageMetadata.candidatesTokenCount}
        </p>
        <p className="text-sm text-gray-700">
          <strong>Total Tokens:</strong> {usageMetadata.totalTokenCount}
        </p>
      </div>
    </div>
  );
}
