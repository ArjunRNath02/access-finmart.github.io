"use client";

import React from "react";
import { Search } from "lucide-react";

export default function NoResults() {
  return (
    <div className="text-center py-16">
      <div className="text-gray-400 mb-4">
        <Search className="w-16 h-16 mx-auto" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">No loans found</h3>
      <p className="text-gray-600">Try adjusting your search or filter criteria</p>
    </div>
  );
}
