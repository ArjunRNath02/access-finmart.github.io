"use client";

import React, { useState, useMemo } from "react";
import LoanGrid from "@/components/loans/LoanGrid";
import NoResults from "@/components/loans/NoResult";
import LoanCTA from "@/components/loans/LoanCTA";
import LoanFilters from "@/components/loans/LoanFilters";
import {
  Home, Building2, User, Globe, GraduationCap,
  HousePlus, Car, Drill, Presentation, Factory
} from "lucide-react";
import { useRouter } from "next/navigation";
import { images } from "@/constants/images";

export default function LoanPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const loanTypes = useMemo(() => [
    {
      id: 'home',
      title: 'Home Loans',
      description: 'Purchase your dream home with competitive interest rates and flexible repayment options.',
      icon: Home,
      features: ['Up to ₹5 Cr', '6.5% - 9% Interest', '30 Years Tenure', 'Minimal Documentation'],
      interestRate: '6.5% - 9%',
      maxAmount: '₹5 Cr',
      category: 'personal',
      banner: images.homeLoan,
    },
    {
      id: 'business',
      title: 'Business Loans',
      description: 'Grow your business with working capital, equipment financing, and expansion loans.',
      icon: Building2,
      features: ['Up to ₹10 Cr', '8% - 12% Interest', 'Flexible Tenure', 'Quick Approval'],
      interestRate: '8% - 12%',
      maxAmount: '₹10 Cr',
      category: 'business',
      banner: images.businessLoan,
    },
    {
      id: 'smebusiness',
      title: 'SME & MSME Loans',
      description: 'Specialized funding solutions for Small and Medium Enterprises.',
      icon: Factory,
      features: ['Up to ₹10 Cr', '8% - 12% Interest', 'Up to 10 years', 'Government Subsidy Schemes'],
      interestRate: '8% - 12%',
      maxAmount: '₹10 Cr',
      category: 'business',
      banner: images.smallBusinessLoan,
    },
    {
      id: 'personal',
      title: 'Personal Loans',
      description: 'Meet your personal financial needs with instant approval and minimal documentation.',
      icon: User,
      features: ['Up to ₹50 L', '10% - 15% Interest', '5 Years Tenure', 'No Collateral'],
      interestRate: '10% - 15%',
      maxAmount: '₹50 L',
      category: 'personal',
      banner: images.personalLoan,
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
      banner: images.nriLoan,
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
      banner: images.professionalLoan,
    },
    {
      id: 'project',
      title: 'Project Financing',
      description: 'Large-scale project financing for infrastructure and development projects.',
      icon: Presentation,
      features: ['Large Projects', '9% - 13% Interest', 'Custom Tenure', 'Expert Support'],
      interestRate: '9% - 13%',
      maxAmount: '₹100 Cr',
      category: 'business',
      banner: images.projectLoan,
    },
    {
      id: 'construction',
      title: 'Purchase & Construction Loans',
      description: 'Finance your commercial and residential property purchase or construction.',
      icon: Drill,
      features: ['₹25 L - ₹50 Cr', '8.5% - 14% p.a', 'Up to 30 Years', 'Commercial & Residential Options'],
      interestRate: '8.5% - 14% p.a',
      maxAmount: '₹50 Cr',
      category: 'personal',
      banner: images.constructionLoan,
    },
    {
      id: 'vehicle',
      title: 'Vehicle Loans',
      description: 'Drive your dream car or bike with our competitive vehicle financing.',
      icon: Car,
      features: ['Up to 90% of vehicle cost', '7.5% - 14% p.a', '12 months - 7 years', 'New & Used Vehicles'],
      interestRate: '7.5% - 14% p.a',
      maxAmount: 'Up to 90% of vehicle cost',
      category: 'personal',
      banner: images.vehicleLoan,
    },
    {
      id: 'mortgage',
      title: 'Mortgage Loans',
      description: 'Leverage your property for immediate funding needs.',
      icon: HousePlus,
      features: ['Up to 70% of property value', '9% - 14% p.a', 'Up to 20 Years', 'Multiple End-Use Options'],
      interestRate: '9% - 14% p.a',
      maxAmount: 'Up to 70% of property value',
      category: 'personal',
      banner: images.homeLoan,
    },
  ], []);

  const categories = useMemo(() => [
    { id: "all", label: "All Loans" },
    { id: "personal", label: "Personal" },
    { id: "business", label: "Business" },
    { id: "nri", label: "NRI" },
    { id: "professional", label: "Professional" },
  ], []);

  // Filtered loans based on search and category
  const filteredLoans = useMemo(() => loanTypes.filter(loan => {
    const matchesSearch = loan.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      loan.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || loan.category === selectedCategory;
    return matchesSearch && matchesCategory;
  }), [loanTypes, searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Explore Loan Options
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find the perfect loan for your needs. Our experts prepare your portfolio for guaranteed bank approval.
          </p>
        </div>

        {/* Search & Filters */}
        <LoanFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* Loan Grid */}
        <div className="mt-12">
          {filteredLoans.length > 0 ? (
            <LoanGrid
              loans={filteredLoans}
              onNavigate={(page) => router.push(`/${page}`)}
            />
          ) : (
            <NoResults />
          )}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <LoanCTA
            onNavigate={(page) => router.push(`/${page === "emi-calculator" ? "emi-calculator" : page}`)}
          />
        </div>
      </div>
    </div>
  );
}
