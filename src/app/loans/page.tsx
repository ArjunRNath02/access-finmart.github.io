"use client";

import React, { useState } from "react";

import LoanGrid from "@/components/loans/LoanGrid";
import NoResults from "@/components/loans/NoResult";
import LoanCTA from "@/components/loans/LoanCTA";
import LoanFilters from "@/components/loans/LoanFilters";
import { Home, Building2, User, Globe, GraduationCap, Briefcase } from "lucide-react";
import { useRouter } from "next/navigation";

type PageType = "home" | "emi-calculator" | "explore-loans" | "contact";

interface LoansPageProps {
  onNavigate: (page: PageType) => void;
}

export default function LoansPage({ onNavigate }: LoansPageProps) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const loanTypes = [
     {
      id: 'home',
      title: 'Home Loans',
      description: 'Purchase your dream home with competitive interest rates and flexible repayment options.',
      icon: Home,
      features: ['Up to ₹5 Crores', '6.5% - 9% Interest', '30 Years Tenure', 'Minimal Documentation'],
      interestRate: '6.5% - 9%',
      maxAmount: '₹5 Cr',
      category: 'personal',
      color: 'blue'
    },
    {
      id: 'business',
      title: 'Business Loans',
      description: 'Grow your business with working capital, equipment financing, and expansion loans.',
      icon: Building2,
      features: ['Up to ₹10 Crores', '8% - 12% Interest', 'Flexible Tenure', 'Quick Approval'],
      interestRate: '8% - 12%',
      maxAmount: '₹10 Cr',
      category: 'business',
      color: 'green'
    },
    {
      id: 'personal',
      title: 'Personal Loans',
      description: 'Meet your personal financial needs with instant approval and minimal documentation.',
      icon: User,
      features: ['Up to ₹50 Lakhs', '10% - 15% Interest', '5 Years Tenure', 'No Collateral'],
      interestRate: '10% - 15%',
      maxAmount: '₹50 L',
      category: 'personal',
      color: 'purple'
    },
    {
      id: 'nri',
      title: 'NRI Loans',
      description: 'Special loan products designed for Non-Resident Indians with attractive terms.',
      icon: Globe,
      features: ['Global Eligibility', '7% - 10% Interest', '20 Years Tenure', 'NRI Specialist'],
      interestRate: '7% - 10%',
      maxAmount: '₹3 Cr',
      category: 'nri',
      color: 'orange'
    },
    {
      id: 'professional',
      title: 'Professional Loans',
      description: 'Tailored loans for doctors, CAs, lawyers, and other professionals.',
      icon: GraduationCap,
      features: ['Professional Focus', '8% - 11% Interest', '15 Years Tenure', 'Practice Loans'],
      interestRate: '8% - 11%',
      maxAmount: '₹2 Cr',
      category: 'professional',
      color: 'indigo'
    },
    {
      id: 'project',
      title: 'Project Financing',
      description: 'Large-scale project financing for infrastructure and development projects.',
      icon: Briefcase,
      features: ['Large Projects', '9% - 13% Interest', 'Custom Tenure', 'Expert Support'],
      interestRate: '9% - 13%',
      maxAmount: '₹100 Cr',
      category: 'business',
      color: 'red'
    }
  ];

  const categories = [
    { id: "all", label: "All Loans" },
    { id: "personal", label: "Personal" },
    { id: "business", label: "Business" },
    { id: "nri", label: "NRI" },
    { id: "professional", label: "Professional" },
  ];

  const filteredLoans = loanTypes.filter((loan) => {
    const matchesSearch =
      loan.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      loan.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || loan.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Loan Options
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find the perfect loan for your needs and let our experts prepare
            your portfolio for guaranteed bank approval
          </p>
        </div>

        {/* Search + Filters */}
        <LoanFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* Loan Grid */}
        {filteredLoans.length > 0 ? (
          <LoanGrid loans={filteredLoans} onNavigate={onNavigate} />
        ) : (
          <NoResults />
        )}

        {/* Bottom CTA */}
        <LoanCTA onNavigate={(page) => router.push(`/${page === "emi-calculator" ? "emi-calculator" : page}`)}/>
      </div>
    </div>
  );
}
